package net.codeforgood.restfulapi.repository;

import net.codeforgood.restfulapi.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MemeberRepository extends JpaRepository<Member, Integer>{

    @Query(value = "SELECT * FROM member limit 1", nativeQuery = true)
    Member getAll();

    @Query(value = "SELECT * FROM member where member_roles =?1", nativeQuery = true)
    List<Member> memberByRole( int id);
}
