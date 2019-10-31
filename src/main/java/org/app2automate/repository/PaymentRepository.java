package org.app2automate.repository;
import org.app2automate.domain.Payment;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Payment entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {

    @Query("select payment from Payment payment where payment.user.login = ?#{principal.username}")
    List<Payment> findByUserIsCurrentUser();

}
