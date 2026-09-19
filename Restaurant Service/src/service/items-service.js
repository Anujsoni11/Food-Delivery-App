const ItemRepository = require('../repository/items-repository');

class ItemService {
    constructor() {
        this.itemRepository = new ItemRepository();
    }

    async createItem(data) {
        try {
            const item = await this.itemRepository.createItem(data);
            return item;
        } catch (error) {
            throw new Error('Service layer error');
        }
    }

    async destroyItem(id) {
        try {
            await this.itemRepository.deleteItem(id);
        } catch (error) {
            throw new Error('Service layer error');
        }
    }

    async updateItem(id, data) {
        try {
            const item = await this.itemRepository.updateItem(id, data);
            return item;
        } catch (error) {
            throw new Error('Service layer error');
        }
    }

    async getItemById(id) {
        try {
            const item = await this.itemRepository.getItemById(id);
            return item;
        } catch (error) {
            throw new Error('Service layer error');
        }
    }

    async getAllItems(page, limit, restaurantId) {
        try {
            const pageNumber = Number(page);
            const limitNumber = Number(limit);
            const offset = (pageNumber - 1) * limitNumber;
            const items = await this.itemRepository.getAllItems(limitNumber, offset, restaurantId);
            return items;
        } catch (error) {
            throw new Error('EService layer error');
        }
    }
}

module.exports = ItemService;