# 🎯 Enhanced Kanban View

A powerful custom Frappe app that extends the standard Kanban view functionality with advanced features for better workflow management and data validation. **Inspired by Bitrix24's Kanban board system**, this app brings enterprise-level workflow management capabilities to the Frappe/ERPNext ecosystem.

## ✨ Features

### 🔗 Link Field-Based Kanban Boards
Create dynamic Kanban boards based on **Link fields** in your DocTypes. The app automatically:
- Detects Link fields in your DocTypes
- Creates columns based on the linked records
- Automatically syncs column changes when linked records are created, renamed, or deleted

### 📋 Column Rules & Validation
Implement **smart validation rules** for your Kanban columns:
- Define required fields for specific columns
- Show validation dialogs when moving cards between columns
- Automatically revert cards to their original position if validation fails
- Ensure data integrity and workflow compliance

### 🔄 Automatic Column Synchronization
The app intelligently manages your Kanban columns:
- **Auto-add**: New columns are automatically added when linked records are created
- **Auto-rename**: Column names are updated when linked records are renamed
- **Auto-remove**: Columns are removed when linked records are deleted

### 🎨 Enhanced User Experience
- **Quick Entry Dialogs**: Streamlined card creation with required field validation
- **Smart Field Detection**: Automatically identifies available fields for rules
- **Seamless Integration**: Works with existing Frappe Kanban functionality

## 🚀 Installation

### Prerequisites
- Frappe Framework (v14+)
- ERPNext (optional but recommended)

### Install the App
```bash
# Clone the repository
git clone <repository-url>
cd enhanced_kanban_view

# Install the app
bench --site your-site.com install-app enhanced_kanban_view

# Build assets
bench build
```

## 📖 Usage Guide

### 1. Creating Link Field-Based Kanban Boards

#### Step 1: Prepare Your DocType
Ensure your DocType has a Link field that points to another DocType. For example:
- **Task** DocType with a **Project** Link field
- **Sales Order** DocType with a **Customer** Link field

#### Step 2: Create the Kanban Board
1. Navigate to your DocType's List view
2. Click on the **Kanban** view button
3. Select **"New Kanban Board"**
4. Choose your Link field from the dropdown
5. The app will automatically create columns based on existing linked records

#### Step 3: Automatic Column Management
- When you create new records in the linked DocType, new columns will automatically appear
- When you rename records, column names will update automatically
- When you delete records, corresponding columns will be removed

### 2. Setting Up Column Rules

#### Step 1: Create Kanban Board Rules
1. Go to **Kanban View > Menu > Create Kanban Board Rule**
2. Choose the target column for the rule
3. Add required fields in the **"Required Fields"** table

#### Step 2: Define Required Fields
For each required field:
1. Select the **Field DocType** (DocField or Custom Field)
2. Choose the **Field Name** from the available options
3. The field will be marked as required when moving cards to this column

#### Step 3: Validation Behavior
When a user moves a card to a column with rules:
1. A dialog opens showing all required fields
2. User must fill in the required fields
3. If validation passes, the card moves to the new column
4. If validation fails, the card returns to its original position

### 3. Advanced Configuration

#### Custom Field Support
The app supports both standard DocFields and Custom Fields:
- Automatically detects all available fields
- Allows selection from standard and custom fields
- Maintains field relationships and validation

#### Permission Management
- Rules are managed by System Managers by default
- Integrates with Frappe's permission system
- Respects user permissions for underlying DocTypes

## 🏗️ Architecture

### Core Components

#### 1. DocTypes
- **Kanban Board Rule**: Defines validation rules for columns
- **Kanban Rule Field**: Child table for required fields

#### 2. Monkey Patches
- **Insert**: Handles automatic column creation
- **Rename**: Manages column name updates
- **Delete**: Removes columns when records are deleted

#### 3. API Endpoints
- **`get_additional_fields`**: Retrieves required fields for validation
- **`get_kanban_board_data`**: Gets board configuration and available fields

#### 4. Frontend Enhancements
- **Enhanced Quick Entry**: Custom dialog for field validation
- **Card Movement Validation**: Intercepts card moves and validates rules
- **Dynamic Field Loading**: Loads available fields based on board configuration

### Database Schema

#### Kanban Board Rule
```json
{
  "kanban_board": "Link to Kanban Board",
  "kanban_board_column": "Link to Kanban Board Column", 
  "required_fields": "Table: Kanban Rule Field"
}
```

#### Kanban Rule Field
```json
{
  "field_doctype": "Select: DocField|Custom Field",
  "field_name": "Select: Available Fields"
}
```

## 🔧 Configuration

### Hooks Configuration
The app uses several Frappe hooks for integration:
- **App CSS/JS**: Includes custom styling and JavaScript
- **Monkey Patches**: Extends core Frappe functionality
- **Document Events**: Handles CRUD operations

### Customization Options
- **Field Selection**: Choose from standard or custom fields
- **Validation Logic**: Define complex validation rules
- **UI Customization**: Extend the quick entry dialog

## 🐛 Troubleshooting

### Common Issues

#### Columns Not Updating
- Check if the linked DocType has proper permissions
- Verify the Link field configuration
- Ensure the monkey patches are loaded correctly

#### Validation Dialogs Not Appearing
- Confirm Kanban Board Rules are properly configured
- Check browser console for JavaScript errors
- Verify field permissions and accessibility

#### Performance Issues
- Monitor database queries for large datasets
- Consider indexing on frequently used fields
- Review monkey patch performance impact

### Debug Mode
Enable debug logging to troubleshoot issues:
```python
# In your site's config
debug = 1
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Development Setup
```bash
# Clone and setup development environment
git clone https://github.com/ibrahim317/enhanced_kanban_view
cd enhanced_kanban_view

# Install development dependencies
pip install -r requirements-dev.txt

# Run tests
bench run-tests enhanced_kanban_view
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](license.txt) file for details.

## 🙏 Acknowledgments

- **Bitrix24** - This design and functionality is inspired by Bitrix24's Kanban board system
- Frappe Framework team for the excellent foundation
- All contributors who helped improve this app

## 📞 Support

For support and questions:
- 📧 Email: i.aboelsoud21@gmail.com
- 🐛 Issues: Create an issue on GitHub
- 📖 Documentation: Check the code comments and docstrings

---

**Made with ❤️ for the Frappe/ERPNext community**
