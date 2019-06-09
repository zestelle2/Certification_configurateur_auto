<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ConfiguratorController extends AbstractController
{
    /**
     * @Route("/configurator-alpin", name="configurator")
     */
    public function index()
    {
        return $this->render('configurator/index.html.twig', [
            'controller_name' => 'ConfiguratorController',
        ]);
    }
}
