package br.ufg.inf.onboarding;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.ListableBeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.event.ValidatingRepositoryEventListener;
import org.springframework.validation.Validator;

import java.util.List;
import java.util.Map;

/**
 * Solução para o bug existente no Spring Data REST, que afeta a descoberta de eventos.
 * Registrado em: https://github.com/spring-projects/spring-data-rest/issues/898
 */
@Configuration
public class ValidatorEventRegister implements InitializingBean {

    private static final List<String> EVENTS;
    static {
        EVENTS = List.of("beforeCreate"
                , "afterCreate"
                , "beforeSave"
                , "afterSave"
                , "beforeLinkSave"
                , "afterLinkSave"
                , "beforeDelete"
                , "afterDelete");
    }

    @Autowired
    ListableBeanFactory beanFactory;

    @Autowired
    ValidatingRepositoryEventListener validatingRepositoryEventListener;

    @Override
    public void afterPropertiesSet() {
        Map<String, Validator> validators = beanFactory.getBeansOfType(Validator.class);

        for (Map.Entry<String, Validator> entry : validators.entrySet()) {
            EVENTS.stream().filter(p -> entry.getKey().startsWith(p)).findFirst()
                    .ifPresent(p -> validatingRepositoryEventListener.addValidator(p, entry.getValue()));
        }
    }
}