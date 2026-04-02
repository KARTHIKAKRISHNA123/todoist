package com.kk.HelloWorld.utils;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // 1. Made the secret at least 32 characters long to satisfy strict HS256 security!
    private final String SECRET = "Karthika_Krishna_M_Secret_Key_12345!";
    private final long EXPIRATION = 1000 * 60 * 60 * 24; // 24 hours
    private final Key secretKey = Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));

    public String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                // 2. Fixed the math: Added the longs together INSIDE the Date constructor
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
                // 3. Changed ES256 to HS256 to match your HMAC secretKey!
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();
    }

    public String extractEmail(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                // 4. Changed Jwt to Jws because your tokens are signed!
                .parseClaimsJws(token)
                .getBody()
                .getSubject();

    }

    public boolean validateJwtToken(String token) {
        try {
            extractEmail(token);
            return true;
        }
        catch (JwtException exception) {
            return false;
        }
    }
}