import Parse from 'parse';
import _ from 'underscore';

const Project = Parse.Object.extend('Project');

const __cleanMarkerAttributes = (attributes) => _.omit(attributes, 'projectId', 'state');

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

  syncMarker: (marker) => {
    return new Promise((resolve) => {
      const query = new Parse.Query(Project);
      query.get(marker.projectId).then((project) => {
        const markers = _.filter(project.get('markers') || [],
          (m) => m.id !== marker.id);
        markers.push(__cleanMarkerAttributes(marker));
        project.save({ markers }).then(() => resolve());
      });
    });
  },

  deleteMarker: (marker) => {
    return new Promise((resolve) => {
      const query = new Parse.Query(Project);
      query.get(marker.projectId).then((project) => {
        const markers = _.filter(project.get('markers') || [],
          (m) => m.id !== marker.id);
        project.save({ markers }).then(() => resolve());
      });
    });
  },
};
