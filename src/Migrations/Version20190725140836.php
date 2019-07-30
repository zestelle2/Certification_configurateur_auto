<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190725140836 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto ADD storage_pack VARCHAR(255) NOT NULL, ADD storage_pack_price DOUBLE PRECISION NOT NULL, ADD cruise_control VARCHAR(255) NOT NULL, ADD cruise_control_price DOUBLE PRECISION NOT NULL, ADD outside_retro VARCHAR(255) NOT NULL, ADD outside_retro_price DOUBLE PRECISION NOT NULL, ADD interior_mirror VARCHAR(255) NOT NULL, ADD interior_mirror_price DOUBLE PRECISION NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto DROP storage_pack, DROP storage_pack_price, DROP cruise_control, DROP cruise_control_price, DROP outside_retro, DROP outside_retro_price, DROP interior_mirror, DROP interior_mirror_price');
    }
}
