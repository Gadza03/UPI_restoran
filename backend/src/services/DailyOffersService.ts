import { NotFoundError } from "../errors/HttpError";
import { DailyOffersRepository } from "../repositories/DailyOfffersRepository";

export class DailyOffersService{
    private readonly dailyOffersRepository = new DailyOffersRepository();

    public async findDailyOffer() : Promise<any> {
        const todaysDate = new Date().toISOString().split('T')[0];

        try {
            const todaysOffer = await this.dailyOffersRepository.dailyOfferMeals(todaysDate);
            if (todaysOffer && todaysOffer.length > 0)
                return todaysOffer;

            return await this.dailyOffersRepository.getClosestDateOffers(todaysDate);
        } catch (error) {
            throw new NotFoundError("Daily offer is not founded")
        }
    }
}
