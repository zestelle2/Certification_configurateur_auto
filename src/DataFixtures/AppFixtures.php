<?php

namespace App\DataFixtures;

use App\Entity\Auto;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        

        // $manager->persist($product);

        $manager->flush();
    }
}
