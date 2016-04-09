import Parse from 'parse';

const Project = Parse.Object.extend('Project');

export default {
  getProjectById: (id) => {
    return new Promise((resolve, reject) => {
      const query = new Parse.Query(Project);
      return query.get(id).then((project) => {
        if (project) {
          resolve(project.toJSON());
        } else {
          reject();
        }
      });
    });
  },

  createProject: (image) => {
    return new Promise((resolve) => {
      new Project().save({ image }).then((project) => {
        resolve(project.toJSON());
      });
    });
  },
};
