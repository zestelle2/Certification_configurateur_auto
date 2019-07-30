<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190724181052 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto ADD help_parking_back VARCHAR(255) NOT NULL, ADD help_parking_back_price DOUBLE PRECISION NOT NULL, ADD help_parking_before VARCHAR(255) NOT NULL, ADD help_parking_before_price DOUBLE PRECISION NOT NULL, ADD reverse_camera VARCHAR(255) NOT NULL, ADD reverse_camera_price DOUBLE PRECISION NOT NULL, ADD sport_exhaust VARCHAR(255) NOT NULL, ADD sport_exhaust_price DOUBLE PRECISION NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto DROP help_parking_back, DROP help_parking_back_price, DROP help_parking_before, DROP help_parking_before_price, DROP reverse_camera, DROP reverse_camera_price, DROP sport_exhaust, DROP sport_exhaust_price');
    }
}
