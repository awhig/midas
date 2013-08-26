define([
	'jquery',
	'underscore',
	'backbone',
	'text!task_list_template'
], function ($, _, Backbone, TaskListTemplate) {

	var TasksCollectionView = Backbone.View.extend({

		render: function () {
			var tasksJSON = {
				tasks: this.options.collection.toJSON()
			}

			this.compiledTemplate = _.template(TaskListTemplate, tasksJSON)
			this.$el.html(this.compiledTemplate);

			// Allow chaining.
			return this;
		}

	});

	return TasksCollectionView;
});