<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190617084158 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE accessory (id INT AUTO_INCREMENT NOT NULL, auto_id INT NOT NULL, category VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, picture VARCHAR(255) DEFAULT NULL, price DOUBLE PRECISION NOT NULL, INDEX IDX_A1B1251C1D55B925 (auto_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE auto (id INT AUTO_INCREMENT NOT NULL, buyer_id INT NOT NULL, version_name VARCHAR(255) NOT NULL, version_price DOUBLE PRECISION NOT NULL, color_name VARCHAR(255) NOT NULL, color_price DOUBLE PRECISION NOT NULL, rims_name VARCHAR(255) NOT NULL, rims_price DOUBLE PRECISION NOT NULL, seat_name VARCHAR(255) NOT NULL, seat_price DOUBLE PRECISION NOT NULL, INDEX IDX_66BA25FA6C755722 (buyer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE equipment (id INT AUTO_INCREMENT NOT NULL, auto_id INT NOT NULL, category VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, picture VARCHAR(255) DEFAULT NULL, price DOUBLE PRECISION NOT NULL, INDEX IDX_D338D5831D55B925 (auto_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, avatard VARCHAR(255) DEFAULT NULL, adress VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE accessory ADD CONSTRAINT FK_A1B1251C1D55B925 FOREIGN KEY (auto_id) REFERENCES auto (id)');
        $this->addSql('ALTER TABLE auto ADD CONSTRAINT FK_66BA25FA6C755722 FOREIGN KEY (buyer_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE equipment ADD CONSTRAINT FK_D338D5831D55B925 FOREIGN KEY (auto_id) REFERENCES auto (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE accessory DROP FOREIGN KEY FK_A1B1251C1D55B925');
        $this->addSql('ALTER TABLE equipment DROP FOREIGN KEY FK_D338D5831D55B925');
        $this->addSql('ALTER TABLE auto DROP FOREIGN KEY FK_66BA25FA6C755722');
        $this->addSql('DROP TABLE accessory');
        $this->addSql('DROP TABLE auto');
        $this->addSql('DROP TABLE equipment');
        $this->addSql('DROP TABLE user');
    }
}
