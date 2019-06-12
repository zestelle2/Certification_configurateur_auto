<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AutoRepository")
 */
class Auto
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $versionName;

    /**
     * @ORM\Column(type="float")
     */
    private $versionPrice;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $colorName;

    /**
     * @ORM\Column(type="float")
     */
    private $colorPrice;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $rimsName;

    /**
     * @ORM\Column(type="float")
     */
    private $rimsPrice;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $seatName;

    /**
     * @ORM\Column(type="float")
     */
    private $seatPrice;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Equipment", mappedBy="auto", orphanRemoval=true)
     */
    private $equipments;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Accessory", mappedBy="auto", orphanRemoval=true)
     */
    private $accessories;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="autos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $buyer;

    public function __construct()
    {
        $this->equipments = new ArrayCollection();
        $this->accessories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getVersionName(): ?string
    {
        return $this->versionName;
    }

    public function setVersionName(string $versionName): self
    {
        $this->versionName = $versionName;

        return $this;
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

    public function getColorName(): ?string
    {
        return $this->colorName;
    }

    public function setColorName(string $colorName): self
    {
        $this->colorName = $colorName;

        return $this;
    }

    public function getColorPrice(): ?float
    {
        return $this->colorPrice;
    }

    public function setColorPrice(float $colorPrice): self
    {
        $this->colorPrice = $colorPrice;

        return $this;
    }

    public function getRimsName(): ?string
    {
        return $this->rimsName;
    }

    public function setRimsName(string $rimsName): self
    {
        $this->rimsName = $rimsName;

        return $this;
    }

    public function getRimsPrice(): ?float
    {
        return $this->rimsPrice;
    }

    public function setRimsPrice(float $rimsPrice): self
    {
        $this->rimsPrice = $rimsPrice;

        return $this;
    }

    public function getSeatName(): ?string
    {
        return $this->seatName;
    }

    public function setSeatName(string $seatName): self
    {
        $this->seatName = $seatName;

        return $this;
    }

    public function getSeatPrice(): ?float
    {
        return $this->seatPrice;
    }

    public function setSeatPrice(float $seatPrice): self
    {
        $this->seatPrice = $seatPrice;

        return $this;
    }

    /**
     * @return Collection|Equipment[]
     */
    public function getEquipments(): Collection
    {
        return $this->equipments;
    }

    public function addEquipment(Equipment $equipment): self
    {
        if (!$this->equipments->contains($equipment)) {
            $this->equipments[] = $equipment;
            $equipment->setAuto($this);
        }

        return $this;
    }

    public function removeEquipment(Equipment $equipment): self
    {
        if ($this->equipments->contains($equipment)) {
            $this->equipments->removeElement($equipment);
            // set the owning side to null (unless already changed)
            if ($equipment->getAuto() === $this) {
                $equipment->setAuto(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Accessory[]
     */
    public function getAccessories(): Collection
    {
        return $this->accessories;
    }

    public function addAccessory(Accessory $accessory): self
    {
        if (!$this->accessories->contains($accessory)) {
            $this->accessories[] = $accessory;
            $accessory->setAuto($this);
        }

        return $this;
    }

    public function removeAccessory(Accessory $accessory): self
    {
        if ($this->accessories->contains($accessory)) {
            $this->accessories->removeElement($accessory);
            // set the owning side to null (unless already changed)
            if ($accessory->getAuto() === $this) {
                $accessory->setAuto(null);
            }
        }

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
}
