package codegym.module4.services.Impl;

import codegym.module4.entities.Promotion;
import codegym.module4.repositories.PromotionRepo;
import codegym.module4.services.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PromotionServiceImpl implements PromotionService
{
    @Autowired
    private PromotionRepo promotionRepo;
    @Override
    public List<Promotion> findAll()
    {
        return promotionRepo.findAll();
    }

    @Override
<<<<<<< HEAD
    public Promotion save(Promotion promotion) {
        return promotionRepo.save(promotion);
=======

    public Optional<Promotion> findById(int id) {
        return promotionRepo.findById(id);
    }

    @Override
    public void save(Promotion promotion) {
         promotionRepo.save(promotion);
    }

    @Override
    public void remove(Promotion promotion) {
         promotionRepo.delete(promotion);

>>>>>>> 8b122d312ab15deb493403fc776a7a376b4f6c4c
    }
}
