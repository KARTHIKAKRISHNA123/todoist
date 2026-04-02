package com.kk.HelloWorld.config;

import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ServerPortCustomizer implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {

    @Override
    public void customize(ConfigurableServletWebServerFactory factory) {
        // This environment variable is automatically provided by Zoho Catalyst
        String port = System.getenv("X_ZOHO_CATALYST_LISTEN_PORT");

        if (port != null) {

            factory.setPort(Integer.parseInt(port));
        } else {
            // Default port for when you run it locally on your laptop
            factory.setPort(8081);
        }
    }
}