import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Departement,
  ProjectEntity,
  ProjectStatus,
  ProjectType,
} from '../Entity/project.entity';
import { Repository } from 'typeorm';
import { DepartementEntity } from 'src/Entity/departement.entity';
import { UserEntity, UserRole } from 'src/Entity/user.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity) private repo: Repository<ProjectEntity>,
  ) {}

  async getAllProjects() {
    return await this.repo.find();
  }

  async createProject(
    title: string,
    description: string,
    dateStart: string,
    dateEnd: string,
    secteur: Departement,
    business: string,
    type: ProjectType,
  ) {
    const project = new ProjectEntity();
    project.title = title;
    project.description = description;
    project.dateStart = dateStart;
    project.dateEnd = dateEnd;
    project.secteur = secteur;
    project.business = business;
    project.type = type;

    this.repo.create(project);

    return await this.repo.save(project);
  }

  async delete(id: number): Promise<{ success: boolean }> {
    const result = await this.repo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Project not deleted');
    } else {
      return { success: true };
    }
  }
}
