

class CrudService {
    constructor(repo){
        this.repo = new repo();
    }

    async create(data){
        try {
            const result = await this.repo.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async delete(repoId){
        try {
            await this.repo.delete(repoId);
            return true;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async get(repoId){
        try {
            const result = await this.repo.get(repoId);
            return result;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async update(repoId, data){
        try {
            const result = await this.repo.update(repoId, data);
            return result;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAll(){
        try {
            const result = await this.repo.getAll()
            return result;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = CrudService;