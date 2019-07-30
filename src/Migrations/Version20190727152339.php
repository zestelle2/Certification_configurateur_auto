<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190727152339 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto CHANGE version_price version_price INT NOT NULL, CHANGE color_price color_price INT NOT NULL, CHANGE rims_price rims_price INT NOT NULL, CHANGE seat_price seat_price INT NOT NULL, CHANGE footrest footrest INT NOT NULL, CHANGE heritage_pack heritage_pack INT NOT NULL, CHANGE help_parking_back help_parking_back INT NOT NULL, CHANGE help_parking_before help_parking_before INT NOT NULL, CHANGE reverse_camera reverse_camera INT NOT NULL, CHANGE sport_exhaust sport_exhaust INT NOT NULL, CHANGE storage_pack storage_pack INT NOT NULL, CHANGE cruise_control cruise_control INT NOT NULL, CHANGE outside_retro outside_retro INT NOT NULL, CHANGE interior_mirror interior_mirror INT NOT NULL, CHANGE focal_sound focal_sound INT NOT NULL, CHANGE premium_audio premium_audio INT NOT NULL, CHANGE sound sound INT NOT NULL, CHANGE alpine_metrics alpine_metrics INT NOT NULL, CHANGE bleu_calliper bleu_calliper INT NOT NULL, CHANGE grey_calliper grey_calliper INT NOT NULL, CHANGE alpine_logo alpine_logo INT NOT NULL, CHANGE wheel_logo wheel_logo INT NOT NULL, CHANGE carbone_pack carbone_pack INT NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto CHANGE version_price version_price DOUBLE PRECISION NOT NULL, CHANGE color_price color_price DOUBLE PRECISION NOT NULL, CHANGE rims_price rims_price DOUBLE PRECISION NOT NULL, CHANGE seat_price seat_price DOUBLE PRECISION NOT NULL, CHANGE footrest footrest DOUBLE PRECISION NOT NULL, CHANGE heritage_pack heritage_pack DOUBLE PRECISION NOT NULL, CHANGE help_parking_back help_parking_back DOUBLE PRECISION NOT NULL, CHANGE help_parking_before help_parking_before DOUBLE PRECISION NOT NULL, CHANGE reverse_camera reverse_camera DOUBLE PRECISION NOT NULL, CHANGE sport_exhaust sport_exhaust DOUBLE PRECISION NOT NULL, CHANGE storage_pack storage_pack DOUBLE PRECISION NOT NULL, CHANGE cruise_control cruise_control DOUBLE PRECISION NOT NULL, CHANGE outside_retro outside_retro DOUBLE PRECISION NOT NULL, CHANGE interior_mirror interior_mirror DOUBLE PRECISION NOT NULL, CHANGE focal_sound focal_sound DOUBLE PRECISION NOT NULL, CHANGE premium_audio premium_audio DOUBLE PRECISION NOT NULL, CHANGE sound sound DOUBLE PRECISION NOT NULL, CHANGE alpine_metrics alpine_metrics DOUBLE PRECISION NOT NULL, CHANGE bleu_calliper bleu_calliper DOUBLE PRECISION NOT NULL, CHANGE grey_calliper grey_calliper DOUBLE PRECISION NOT NULL, CHANGE alpine_logo alpine_logo DOUBLE PRECISION NOT NULL, CHANGE wheel_logo wheel_logo DOUBLE PRECISION NOT NULL, CHANGE carbone_pack carbone_pack DOUBLE PRECISION NOT NULL');
    }
}
