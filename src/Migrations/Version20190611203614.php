<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190611203614 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE accessory ADD CONSTRAINT FK_A1B1251C1D55B925 FOREIGN KEY (auto_id) REFERENCES auto (id)');
        $this->addSql('ALTER TABLE auto ADD buyer_id INT NOT NULL');
        $this->addSql('ALTER TABLE auto ADD CONSTRAINT FK_66BA25FA6C755722 FOREIGN KEY (buyer_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_66BA25FA6C755722 ON auto (buyer_id)');
        $this->addSql('ALTER TABLE equipment ADD CONSTRAINT FK_D338D5831D55B925 FOREIGN KEY (auto_id) REFERENCES auto (id)');
        $this->addSql('ALTER TABLE user DROP current_location');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE accessory DROP FOREIGN KEY FK_A1B1251C1D55B925');
        $this->addSql('ALTER TABLE auto DROP FOREIGN KEY FK_66BA25FA6C755722');
        $this->addSql('DROP INDEX IDX_66BA25FA6C755722 ON auto');
        $this->addSql('ALTER TABLE auto DROP buyer_id');
        $this->addSql('ALTER TABLE equipment DROP FOREIGN KEY FK_D338D5831D55B925');
        $this->addSql('ALTER TABLE user ADD current_location VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci');
    }
}
