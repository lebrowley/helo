INSERT INTO users
(username, password, profile_pic)
VALUES
($1, $2, $3);

SELECT * FROM users
WHERE username = $1; 



-- INSERT INTO users
-- (profile_pic)
-- VALUES
-- ('https://robohash.org/toad');