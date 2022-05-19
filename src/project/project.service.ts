import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ProjectEntity, ProjectStatus } from "../Entity/project.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProjectService {

  constructor(@InjectRepository(ProjectEntity) private repo: Repository<ProjectEntity>) {
  }


  async getAllProjects() {
    return await this.repo.find();
  }
  
  async createProject(title: string, description: string, date: string){
    const project = new ProjectEntity();
    project.title = title;
    project.description = description;
    project.date = date;
    project.status = ProjectStatus.OPEN;

    this.repo.create(project);
    return await this.repo.save(project);
  }

  async delete(id: number): Promise<{ success: boolean; }> {
    const result = await this.repo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Project not deleted');
    } else {
      return { success: true}
    }



}
  

}