<?php

namespace App\Form;

use App\Entity\Auto;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AutoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            #information général
            ->add('versionPrice', MoneyType::class)
            ->add('colorPrice')
            ->add('rimsPrice')
            ->add('seatPrice')

            #information équipements
            ->add('footrest')
            ->add('heritagePack')
            ->add('helpParkingBack')
            ->add('helpParkingBefore')
            ->add('reverseCamera')
            ->add('sportExhaust')
            ->add('storagePack')
            ->add('cruiseControl')
            ->add('outsideRetro')
            ->add('interiorMirror')
            ->add('focalSound')
            ->add('premiumAudio')
            ->add('sound')
            ->add('alpineMetrics')
            ->add('bleuCalliper')
            ->add('greyCalliper')
            ->add('alpineLogo')
            ->add('wheelLogo')
            ->add('carbonePack')
            ->add('aluminumPedal')
            ->add('heatedSeat')
            ->add('brakeAssist')
            ->add('highPerformanceBrake')
            ->add('airbag')

            #information accessoires
            ->add('alarm')
            ->add('chain')
            ->add('extinguishing')
            ->add('fixation')
            ->add('kitSecurity')
            ->add('obd')
            ->add('cameraSupport')
            ->add('smartphoneSupport')
            ->add('net')
            ->add('mat')
            ->add('batteryCharger')
            ->add('kitTools')
            ->add('antiTheft')
            ->add('cabochons')
            ->add('cover')

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Auto::class,
        ]);
    }
}
