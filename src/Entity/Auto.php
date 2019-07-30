<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\User;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AutoRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Auto
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="float")
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     */
    private $versionPrice;


    /**
     * @ORM\Column(type="integer")
     */
    private $colorPrice;


    /**
     * @ORM\Column(type="integer")
     */
    private $rimsPrice;


    /**
     * @ORM\Column(type="integer")
     */
    private $seatPrice;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="autos")
     * @ORM\JoinColumn(nullable=true)
     */
    private $buyer;

    /**
     * @ORM\Column(type="float", length=255)
     */
    private $footrest;


    /**
     * @ORM\Column(type="float", length=255)
     */
    private $heritagePack;


    /**
     * @ORM\Column(type="float", length=255)
     */
    private $helpParkingBack;


    /**
     * @ORM\Column(type="float", length=255)
     */
    private $helpParkingBefore;


    /**
     * @ORM\Column(type="float", length=255)
     */
    private $reverseCamera;


    /**
     * @ORM\Column(type="float", length=255)
     */
    private $sportExhaust;


    /**
     * @ORM\Column(type="float", length=255)
     */
    private $storagePack;


    /**
     * @ORM\Column(type="float", length=255)
     */
    private $cruiseControl;

    /**
     * @ORM\Column(type="float", length=255)
     */
    private $outsideRetro;

    /**
     * @ORM\Column(type="float", length=255)
     */
    private $interiorMirror;


    /**
     * @ORM\Column(type="float", length=255)
     */
    private $focalSound;

    /**
     * @ORM\Column(type="float", length=255)
     */
    private $premiumAudio;

    /**
     * @ORM\Column(type="integer", length=255)
     */
    private $sound;

    /**
     * @ORM\Column(type="float", length=255)
     */
    private $alpineMetrics;

    /**
     * @ORM\Column(type="float", length=255)
     */
    private $bleuCalliper;

    /**
     * @ORM\Column(type="float")
     */
    private $greyCalliper;

    /**
     * @ORM\Column(type="float")
     */
    private $alpineLogo;

    /**
     * @ORM\Column(type="float")
     */
    private $wheelLogo;

    /**
     * @ORM\Column(type="integer")
     */
    private $carbonePack;

    /**
     * @ORM\Column(type="float")
     */
    private $aluminumPedal;

    /**
     * @ORM\Column(type="float")
     */
    private $heatedSeat;

    /**
     * @ORM\Column(type="integer")
     */
    private $brakeAssist;

    /**
     * @ORM\Column(type="float")
     */
    private $highPerformanceBrake;

    /**
     * @ORM\Column(type="integer")
     */
    private $airbag;

    /**
     * @ORM\Column(type="float")
     */
    private $alarm;

    /**
     * @ORM\Column(type="float")
     */
    private $chain;

    /**
     * @ORM\Column(type="float")
     */
    private $extinguishing;

    /**
     * @ORM\Column(type="float")
     */
    private $fixation;

    /**
     * @ORM\Column(type="float")
     */
    private $kitSecurity;

    /**
     * @ORM\Column(type="float")
     */
    private $obd;

    /**
     * @ORM\Column(type="float")
     */
    private $cameraSupport;

    /**
     * @ORM\Column(type="float")
     */
    private $smartphoneSupport;

    /**
     * @ORM\Column(type="float")
     */
    private $net;

    /**
     * @ORM\Column(type="float")
     */
    private $mat;

    /**
     * @ORM\Column(type="float")
     */
    private $batteryCharger;

    /**
     * @ORM\Column(type="float")
     */
    private $kitTools;

    /**
     * @ORM\Column(type="float")
     */
    private $antiTheft;

    /**
     * @ORM\Column(type="float")
     */
    private $cabochons;

    /**
     * @ORM\Column(type="float")
     */
    private $cover;




    public function __construct()
    {


    }

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getVersionPrice(): ?float
    {
        return $this->versionPrice;
    }

    public function setVersionPrice(float $versionPrice): self
    {
        $this->versionPrice = $versionPrice;

        return $this;
    }


    public function getColorPrice(): ?int
    {
        return $this->colorPrice;
    }

    public function setColorPrice(int $colorPrice): self
    {
        $this->colorPrice = $colorPrice;

        return $this;
    }


    public function getRimsPrice(): ?int
    {
        return $this->rimsPrice;
    }

    public function setRimsPrice(int $rimsPrice): self
    {
        $this->rimsPrice = $rimsPrice;

        return $this;
    }


    public function getSeatPrice(): ?int
    {
        return $this->seatPrice;
    }

    public function setSeatPrice(int $seatPrice): self
    {
        $this->seatPrice = $seatPrice;

        return $this;
    }




    public function getBuyer(): ?User
    {
        return $this->buyer;
    }

    public function setBuyer(?User $buyer): self
    {
        $this->buyer = $buyer;

        return $this;
    }

    public function getFootrest(): ?float
    {
        return $this->footrest;
    }

    public function setFootrest(float $footrest): self
    {
        $this->footrest = $footrest;

        return $this;
    }


    public function getHeritagePack(): ?float
    {
        return $this->heritagePack;
    }

    public function setHeritagePack(float $heritagePack): self
    {
        $this->heritagePack = $heritagePack;

        return $this;
    }


    public function getHelpParkingBack(): ?float
    {
        return $this->helpParkingBack;
    }

    public function setHelpParkingBack(float $helpParkingBack): self
    {
        $this->helpParkingBack = $helpParkingBack;

        return $this;
    }


    public function getHelpParkingBefore(): ?float
    {
        return $this->helpParkingBefore;
    }

    public function setHelpParkingBefore(float $helpParkingBefore): self
    {
        $this->helpParkingBefore = $helpParkingBefore;

        return $this;
    }



    public function getReverseCamera(): ?float
    {
        return $this->reverseCamera;
    }

    public function setReverseCamera(float $reverseCamera): self
    {
        $this->reverseCamera = $reverseCamera;

        return $this;
    }


    public function getSportExhaust(): ?float
    {
        return $this->sportExhaust;
    }

    public function setSportExhaust(float $sportExhaust): self
    {
        $this->sportExhaust = $sportExhaust;

        return $this;
    }


    public function getStoragePack(): ?float
    {
        return $this->storagePack;
    }

    public function setStoragePack(float $storagePack): self
    {
        $this->storagePack = $storagePack;

        return $this;
    }


    public function getCruiseControl(): ?float
    {
        return $this->cruiseControl;
    }

    public function setCruiseControl(float $cruiseControl): self
    {
        $this->cruiseControl = $cruiseControl;

        return $this;
    }


    public function getOutsideRetro(): ?float
    {
        return $this->outsideRetro;
    }

    public function setOutsideRetro(float $outsideRetro): self
    {
        $this->outsideRetro = $outsideRetro;

        return $this;
    }


    public function getInteriorMirror(): ?float
    {
        return $this->interiorMirror;
    }

    public function setInteriorMirror(float $interiorMirror): self
    {
        $this->interiorMirror = $interiorMirror;

        return $this;
    }


    public function getFocalSound(): ?float
    {
        return $this->focalSound;
    }

    public function setFocalSound(float $focalSound): self
    {
        $this->focalSound = $focalSound;

        return $this;
    }

    public function getPremiumAudio(): ?float
    {
        return $this->premiumAudio;
    }

    public function setPremiumAudio(float $premiumAudio): self
    {
        $this->premiumAudio = $premiumAudio;

        return $this;
    }

    public function getSound(): ?int
    {
        return $this->sound;
    }

    public function setSound(int $sound): self
    {
        $this->sound = $sound;

        return $this;
    }


    public function getAlpineMetrics(): ?float
    {
        return $this->alpineMetrics;
    }

    public function setAlpineMetrics(float $alpineMetrics): self
    {
        $this->alpineMetrics = $alpineMetrics;

        return $this;
    }

    public function getBleuCalliper(): ?float
    {
        return $this->bleuCalliper;
    }

    public function setBleuCalliper(float $bleuCalliper): self
    {
        $this->bleuCalliper = $bleuCalliper;

        return $this;
    }

    public function getGreyCalliper(): ?float
    {
        return $this->greyCalliper;
    }

    public function setGreyCalliper(float $greyCalliper): self
    {
        $this->greyCalliper = $greyCalliper;

        return $this;
    }

    public function getAlpineLogo(): ?float
    {
        return $this->alpineLogo;
    }

    public function setAlpineLogo(float $alpineLogo): self
    {
        $this->alpineLogo = $alpineLogo;

        return $this;
    }

    public function getWheelLogo(): ?float
    {
        return $this->wheelLogo;
    }

    public function setWheelLogo(float $wheelLogo): self
    {
        $this->wheelLogo = $wheelLogo;

        return $this;
    }

    public function getCarbonePack(): ?int
    {
        return $this->carbonePack;
    }

    public function setCarbonePack(int $carbonePack): self
    {
        $this->carbonePack = $carbonePack;

        return $this;
    }

    public function getAluminumPedal(): ?float
    {
        return $this->aluminumPedal;
    }

    public function setAluminumPedal(float $aluminumPedal): self
    {
        $this->aluminumPedal = $aluminumPedal;

        return $this;
    }

    public function getHeatedSeat(): ?float
    {
        return $this->heatedSeat;
    }

    public function setHeatedSeat(float $heatedSeat): self
    {
        $this->heatedSeat = $heatedSeat;

        return $this;
    }

    public function getBrakeAssist(): ?int
    {
        return $this->brakeAssist;
    }

    public function setBrakeAssist(int $brakeAssist): self
    {
        $this->brakeAssist = $brakeAssist;

        return $this;
    }

    public function getHighPerformanceBrake(): ?float
    {
        return $this->highPerformanceBrake;
    }

    public function setHighPerformanceBrake(float $highPerformanceBrake): self
    {
        $this->highPerformanceBrake = $highPerformanceBrake;

        return $this;
    }

    public function getAirbag(): ?int
    {
        return $this->airbag;
    }

    public function setAirbag(int $airbag): self
    {
        $this->airbag = $airbag;

        return $this;
    }

    public function getAlarm(): ?float
    {
        return $this->alarm;
    }

    public function setAlarm(float $alarm): self
    {
        $this->alarm = $alarm;

        return $this;
    }

    public function getChain(): ?float
    {
        return $this->chain;
    }

    public function setChain(float $chain): self
    {
        $this->chain = $chain;

        return $this;
    }

    public function getExtinguishing(): ?float
    {
        return $this->extinguishing;
    }

    public function setExtinguishing(float $extinguishing): self
    {
        $this->extinguishing = $extinguishing;

        return $this;
    }

    public function getFixation(): ?float
    {
        return $this->fixation;
    }

    public function setFixation(float $fixation): self
    {
        $this->fixation = $fixation;

        return $this;
    }

    public function getKitSecurity(): ?float
    {
        return $this->kitSecurity;
    }

    public function setKitSecurity(float $kitSecurity): self
    {
        $this->kitSecurity = $kitSecurity;

        return $this;
    }

    public function getObd(): ?float
    {
        return $this->obd;
    }

    public function setObd(float $obd): self
    {
        $this->obd = $obd;

        return $this;
    }

    public function getCameraSupport(): ?float
    {
        return $this->cameraSupport;
    }

    public function setCameraSupport(float $cameraSupport): self
    {
        $this->cameraSupport = $cameraSupport;

        return $this;
    }

    public function getSmartphoneSupport(): ?float
    {
        return $this->smartphoneSupport;
    }

    public function setSmartphoneSupport(float $smartphoneSupport): self
    {
        $this->smartphoneSupport = $smartphoneSupport;

        return $this;
    }

    public function getNet(): ?float
    {
        return $this->net;
    }

    public function setNet(float $net): self
    {
        $this->net = $net;

        return $this;
    }

    public function getMat(): ?float
    {
        return $this->mat;
    }

    public function setMat(float $mat): self
    {
        $this->mat = $mat;

        return $this;
    }

    public function getBatteryCharger(): ?float
    {
        return $this->batteryCharger;
    }

    public function setBatteryCharger(float $batteryCharger): self
    {
        $this->batteryCharger = $batteryCharger;

        return $this;
    }

    public function getKitTools(): ?float
    {
        return $this->kitTools;
    }

    public function setKitTools(float $kitTools): self
    {
        $this->kitTools = $kitTools;

        return $this;
    }

    public function getAntiTheft(): ?float
    {
        return $this->antiTheft;
    }

    public function setAntiTheft(float $antiTheft): self
    {
        $this->antiTheft = $antiTheft;

        return $this;
    }

    public function getCabochons(): ?float
    {
        return $this->cabochons;
    }

    public function setCabochons(float $cabochons): self
    {
        $this->cabochons = $cabochons;

        return $this;
    }

    public function getCover(): ?float
    {
        return $this->cover;
    }

    public function setCover(float $cover): self
    {
        $this->cover = $cover;

        return $this;
    }










}
