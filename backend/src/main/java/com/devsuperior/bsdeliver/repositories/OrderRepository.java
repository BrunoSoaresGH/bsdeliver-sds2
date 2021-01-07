package com.devsuperior.bsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.bsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
