-- List the number of recors with the same score in the table second_table
SELECT score, count(*) AS 'number' FROM second_table GROUP BY score ORDER BY score desc;
