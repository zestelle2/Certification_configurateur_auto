<?php

namespace App\Controller;

use App\Entity\Auto;
use App\Entity\User;
use App\Form\AutoType;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ConfiguratorController extends AbstractController
{


    /**
     *Permet de créer une Auto
     *
     * @Route("/configurator-alpin", name="configurator", methods={"GET","POST"})
     *
     *  @return Response
     */
    public function index(Request $request , ObjectManager $manager): Response
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

            // Si le visiteur n'est pas identifié, on le redirige sur la page d'inscription
            if (!($this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_REMEMBERED'))) {
                return $this->redirectToRoute('account_login', [
                    // avec la variable
                ]);
            }

            // sinon on le redirige sur la page auto index (TODO : plus tard celà sera la page de profil utilisateur)

            //message Flash
            $this->addFlash(
                'success',
                "Nous avons bien pris en compte votre demande d'achat"
            );

            return $this->render('home_page/index.html.twig');
        }

        // si le formulaire n'est pas valide alors on reretourne sur la même page
        return $this->render('configurator/newAuto.html.twig', [
            'auto' => $auto,
            'form' => $form->createView(),
        ]);


    }

    /**
     * permet d'afficher le profil d'un utilisateur
     *
     * @Route("/configurator/{usermail}", name="auto_showConfigurator", methods={"GET"})
     */
    /*public function showProfil(Auto $auto, User $user): Response
    {
        return $this->render('auto/show.html.twig', [
            'auto' => $auto,
            'user' => $user
        ]);
    }*/
}
