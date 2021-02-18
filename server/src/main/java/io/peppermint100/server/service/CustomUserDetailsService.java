package io.peppermint100.server.service;

import io.peppermint100.server.entity.CustomUserDetails;
import io.peppermint100.server.entity.User;
import io.peppermint100.server.exception.User.UserNotExistException;
import io.peppermint100.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public CustomUserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> userMaybe = userRepository.findByEmail(email);

        if (userMaybe.isPresent()) {
            User user = userMaybe.get();

            return new CustomUserDetails(
                    user.getUserId(),
                    user.getEmail(),
                    user.getPassword(),
                    user.getFirstName(),
                    user.getLastName(),
                    user.getAddress(),
                    true, true, true, true
            );
        }else {
            return null;
        }
    }
}
