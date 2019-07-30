<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190729071520 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto DROP version_name, DROP color_name, DROP rims_name, DROP seat_name, CHANGE id id DOUBLE PRECISION NOT NULL, CHANGE color_price color_price INT NOT NULL, CHANGE rims_price rims_price INT NOT NULL, CHANGE seat_price seat_price INT NOT NULL, CHANGE sound sound INT NOT NULL, CHANGE carbone_pack carbone_pack INT NOT NULL, CHANGE brake_assist brake_assist INT NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto ADD version_name VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, ADD color_name VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, ADD rims_name VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, ADD seat_name VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE id id DOUBLE PRECISION NOT NULL, CHANGE color_price color_price DOUBLE PRECISION NOT NULL, CHANGE rims_price rims_price DOUBLE PRECISION NOT NULL, CHANGE seat_price seat_price DOUBLE PRECISION NOT NULL, CHANGE sound sound DOUBLE PRECISION NOT NULL, CHANGE carbone_pack carbone_pack DOUBLE PRECISION NOT NULL, CHANGE brake_assist brake_assist DOUBLE PRECISION NOT NULL');
    }
}
