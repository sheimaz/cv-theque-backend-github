import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';

// http://localhost:3000/projects
@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  // http GET verb
  @Get()
  getAllProjects() {
    // console.log(this.projectService.getAllProjects());
    return this.projectService.getAllProjects();
  }

  // http POST verb
  @Post()
  createNewProjdect(@Body() data) {
    const { title, description, dateStart, dateEnd, secteur, business, type } =
      data;

    return this.projectService.createProject(
      title,
      description,
      dateStart,
      dateEnd,
      secteur,
      business,
      type,
    );
  }
  @Delete(':id')
  deleteProject(@Param('id') id: number): any {
    return this.projectService.delete(id);
  }
}
