<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190725191205 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto ADD focal_sound DOUBLE PRECISION NOT NULL, ADD premium_audio DOUBLE PRECISION NOT NULL, ADD sound DOUBLE PRECISION NOT NULL, ADD alpine_metrics DOUBLE PRECISION NOT NULL, DROP footrest_price, DROP heritage_pack_price, DROP help_parking_back_price, DROP help_parking_before_price, DROP reverse_camera_price, DROP sport_exhaust_price, DROP storage_pack_price, DROP cruise_control_price, DROP outside_retro_price, DROP interior_mirror_price, CHANGE footrest footrest DOUBLE PRECISION NOT NULL, CHANGE heritage_pack heritage_pack DOUBLE PRECISION NOT NULL, CHANGE help_parking_back help_parking_back DOUBLE PRECISION NOT NULL, CHANGE help_parking_before help_parking_before DOUBLE PRECISION NOT NULL, CHANGE reverse_camera reverse_camera DOUBLE PRECISION NOT NULL, CHANGE sport_exhaust sport_exhaust DOUBLE PRECISION NOT NULL, CHANGE storage_pack storage_pack DOUBLE PRECISION NOT NULL, CHANGE cruise_control cruise_control DOUBLE PRECISION NOT NULL, CHANGE outside_retro outside_retro DOUBLE PRECISION NOT NULL, CHANGE interior_mirror interior_mirror DOUBLE PRECISION NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto ADD footrest_price DOUBLE PRECISION NOT NULL, ADD heritage_pack_price DOUBLE PRECISION NOT NULL, ADD help_parking_back_price DOUBLE PRECISION NOT NULL, ADD help_parking_before_price DOUBLE PRECISION NOT NULL, ADD reverse_camera_price DOUBLE PRECISION NOT NULL, ADD sport_exhaust_price DOUBLE PRECISION NOT NULL, ADD storage_pack_price DOUBLE PRECISION NOT NULL, ADD cruise_control_price DOUBLE PRECISION NOT NULL, ADD outside_retro_price DOUBLE PRECISION NOT NULL, ADD interior_mirror_price DOUBLE PRECISION NOT NULL, DROP focal_sound, DROP premium_audio, DROP sound, DROP alpine_metrics, CHANGE footrest footrest VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE heritage_pack heritage_pack VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE help_parking_back help_parking_back VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE help_parking_before help_parking_before VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE reverse_camera reverse_camera VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE sport_exhaust sport_exhaust VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE storage_pack storage_pack VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE cruise_control cruise_control VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE outside_retro outside_retro VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE interior_mirror interior_mirror VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci');
    }
}
