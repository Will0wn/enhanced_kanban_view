// function overrideKanbanAddCard() {
// 	if (!cur_list || cur_list.view_name !== "Kanban" || !cur_list.board) {
// 		return;
// 	}

// 	const doctype = cur_list.doctype;
// 	const field_name = cur_list.board.field_name;

// 	if (!doctype || !field_name) {
// 		return;
// 	}

// 	$(".kanban-column, .kanban-empty-state").each(function () {
// 		const $column = $(this);

// 		if ($column.data("add-card-overridden")) {
// 			return;
// 		}

// 		const column_title = $column.data("column-value");

// 		const $new_add_btn = $(
// 			'<div class="kanban-card enhanced-add-card" title="Add Card" style="display: block;">+ Add Card</div>'
// 		).appendTo($column);

// 		$new_add_btn.on("click", () => {
// 			frappe.new_doc(doctype, {
// 				[field_name]: column_title,
// 			});
// 		});

// 		$column.data("add-card-overridden", true);
// 	});
// }

// const original_kanban_view_render = frappe.views.KanbanView.prototype.render;
// frappe.views.KanbanView.prototype.render = function (...args) {
// 	original_kanban_view_render.apply(this, args);
// 	setTimeout(() => {
// 		overrideKanbanAddCard();
// 	}, 200);
// };