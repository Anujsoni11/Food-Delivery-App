const Items = require('../models/items');

class ItemsRepository {
    async createItem(data) {
        try {
            const item = await Items.create(data);
            return item;
        } catch (error) {
            throw new Error('Error creating item');
        }
    }

    async destroyItem(id) {
        try {
            await Items.destroy({ where: { id } });
        } catch (error) {
            throw new Error('Error deleting item');
        }
    }

    async updateItem(id, data) {
        try {
            const item = await Items.update(data, { where: { id } });
            return item;
        } catch (error) {
            throw new Error('Error updating item');
        }
    }

    async getItemById(id) {
        try {
            const item = await Items.findByPk(id);
            return item;
        } catch (error) {
            throw new Error('Error fetching item');
        }
    }

    async getAllItems() {
        try {
            const items = await Items.findAll();
            return items;
        } catch (error) {
            throw new Error('Error fetching items');
        }
    }
}

module.exports = ItemsRepository;