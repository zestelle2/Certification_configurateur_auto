<?php

namespace App\Controller;

use App\Entity\Auto;
use App\Form\AutoType;
use App\Repository\AutoRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/auto")
 */
class AutoController extends AbstractController
{
    /**
     * @Route("/", name="auto_index", methods={"GET"})
     */
    public function index(AutoRepository $autoRepository): Response
    {
        return $this->render('auto/index.html.twig', [
            'autos' => $autoRepository->findAll(),
        ]);
    }

    /**
     *Permet de créer une Auto
     *
     * @Route("/new", name="auto_new", methods={"GET","POST"})
     *
     *  @return Response
     */
    public function new(Request $request , ObjectManager $manager): Response
    {
        $auto = new Auto();
        $username = "";

        //recupère l'username de l'utilisateur connecter
        if (($this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_REMEMBERED'))) {
            $this->denyAccessUnlessGranted('ROLE_USER');
            $username = $this->getUser();
        }



        //creation du formulaire
        $form = $this->createForm(AutoType::class, $auto);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid() && $username!="") {
            $auto->setBuyer($username);
            $manager -> persist($auto);
            $manager->flush();

            // Si le visiteur n'est pas identifié, on le redirige sur la même page
            if (!($this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_REMEMBERED'))) {
                return $this->redirectToRoute('home_page', [
                    // avec la variable
                ]);
            }

            // sinon on le redirige sur la page auto index (TODO : plus tard celà sera la page de profil utilisateur)

            //message Flash
            $this->addFlash(
                'success',
                "Nous avons bien pris en compte votre demande d'achat"
            );

            return $this->redirectToRoute('auto_show');
        }

        // si le formulaire n'est pas valide alors on reretourne sur la même page
        return $this->render('auto/new.html.twig', [
            'auto' => $auto,
            'form' => $form->createView(),
        ]);


    }

    /**
     * @Route("/{id}", name="auto_show", methods={"GET"})
     */
    public function show(Auto $auto): Response
    {
        return $this->render('auto/show.html.twig', [
            'auto' => $auto,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="auto_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Auto $auto): Response
    {
        $form = $this->createForm(AutoType::class, $auto);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('auto_index');
        }

        return $this->render('auto/edit.html.twig', [
            'auto' => $auto,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="auto_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Auto $auto): Response
    {
        if ($this->isCsrfTokenValid('delete'.$auto->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($auto);
            $entityManager->flush();
        }

        return $this->redirectToRoute('auto_index');
    }
}
