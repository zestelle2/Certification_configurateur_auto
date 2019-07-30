<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190727073844 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto ADD bleu_calliper DOUBLE PRECISION NOT NULL, ADD grey_calliper DOUBLE PRECISION NOT NULL, ADD alpine_logo DOUBLE PRECISION NOT NULL, ADD wheel_logo DOUBLE PRECISION NOT NULL, ADD carbone_pack DOUBLE PRECISION NOT NULL, ADD aluminum_pedal INT NOT NULL, ADD heated_seat INT NOT NULL, ADD brake_assist INT NOT NULL, ADD high_performance_brake INT NOT NULL, ADD airbag INT NOT NULL, ADD alarm INT NOT NULL, ADD chain INT NOT NULL, ADD extinguishing INT NOT NULL, ADD fixation INT NOT NULL, ADD kit_security INT NOT NULL, ADD obd INT NOT NULL, ADD camera_support INT NOT NULL, ADD smartphone_support INT NOT NULL, ADD net INT NOT NULL, ADD mat INT NOT NULL, ADD battery_charger INT NOT NULL, ADD kit_tools INT NOT NULL, ADD anti_theft INT NOT NULL, ADD cabochons INT NOT NULL, ADD cover INT NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE auto DROP bleu_calliper, DROP grey_calliper, DROP alpine_logo, DROP wheel_logo, DROP carbone_pack, DROP aluminum_pedal, DROP heated_seat, DROP brake_assist, DROP high_performance_brake, DROP airbag, DROP alarm, DROP chain, DROP extinguishing, DROP fixation, DROP kit_security, DROP obd, DROP camera_support, DROP smartphone_support, DROP net, DROP mat, DROP battery_charger, DROP kit_tools, DROP anti_theft, DROP cabochons, DROP cover');
    }
}
