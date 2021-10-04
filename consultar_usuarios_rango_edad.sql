SELECT usuario, edad, fecha_registro 
FROM usuarios
WHERE (edad >= 18 AND edad < 30)
ORDER BY edad DESC;