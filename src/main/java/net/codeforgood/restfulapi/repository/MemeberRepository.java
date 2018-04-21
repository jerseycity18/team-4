package net.codeforgood.restfulapi.repository;

import net.codeforgood.restfulapi.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MemeberRepository extends JpaRepository<Member, Integer>{

//    @Query("select m from member m")
//    Member getAll();
}
