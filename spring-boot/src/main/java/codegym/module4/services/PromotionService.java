package codegym.module4.services;

import codegym.module4.entities.Movie;
import codegym.module4.entities.Promotion;

import java.util.List;
import java.util.Optional;

public interface PromotionService
{
    List<Promotion> findAll();
    Optional<Promotion> findById(int id);
    void save(Promotion promotion);
    void remove(Promotion promotion);
}
