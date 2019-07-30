<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190724174251 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE auto (id INT AUTO_INCREMENT NOT NULL, buyer_id INT DEFAULT NULL, version_name VARCHAR(255) NOT NULL, version_price DOUBLE PRECISION NOT NULL, color_name VARCHAR(255) NOT NULL, color_price DOUBLE PRECISION NOT NULL, rims_name VARCHAR(255) NOT NULL, rims_price DOUBLE PRECISION NOT NULL, seat_name VARCHAR(255) NOT NULL, seat_price DOUBLE PRECISION NOT NULL, footrest VARCHAR(255) NOT NULL, footrest_price DOUBLE PRECISION NOT NULL, heritage_pack VARCHAR(255) NOT NULL, heritage_pack_price DOUBLE PRECISION NOT NULL, INDEX IDX_66BA25FA6C755722 (buyer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, adress VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE auto ADD CONSTRAINT FK_66BA25FA6C755722 FOREIGN KEY (buyer_id) REFERENCES user (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto DROP FOREIGN KEY FK_66BA25FA6C755722');
        $this->addSql('DROP TABLE auto');
        $this->addSql('DROP TABLE user');
    }
}
