-- AlterTable
CREATE SEQUENCE scores_id_seq;
ALTER TABLE "scores" ALTER COLUMN "id" SET DEFAULT nextval('scores_id_seq');
ALTER SEQUENCE scores_id_seq OWNED BY "scores"."id";
