# Data Model: GitHub Repository Setup and Push

## Repository Configuration Entity
- **name**: string - Repository name (required)
- **description**: string - Repository description (optional)
- **private**: boolean - Whether repository is private (default: false)
- **has_issues**: boolean - Enable issues (default: true)
- **has_projects**: boolean - Enable projects (default: true)
- **has_wiki**: boolean - Enable wiki (default: true)
- **team_id**: integer - Team ID for organization repositories (optional)
- **auto_init**: boolean - Initialize with README (default: false)
- **gitignore_template**: string - Gitignore template name (optional)
- **license_template**: string - License template name (optional)
- **allow_squash_merge**: boolean - Allow squash merging (default: true)
- **allow_merge_commit**: boolean - Allow merge commits (default: true)
- **allow_rebase_merge**: boolean - Allow rebase merging (default: true)

## GitHub Authentication Entity
- **token**: string - Personal Access Token for GitHub API (required, secured)
- **username**: string - GitHub username (optional, can be retrieved from API)
- **api_url**: string - GitHub API URL (default: https://api.github.com)

## Local Repository Entity
- **path**: string - Local path to git repository (required)
- **remote_url**: string - Remote repository URL (required after setup)
- **branch**: string - Current branch name (default: main/master)
- **status**: enum - Repository status (clean, modified, untracked)

## Operation Result Entity
- **success**: boolean - Whether operation was successful
- **message**: string - Human-readable message about the operation
- **error_code**: string - Error code if operation failed (optional)
- **data**: object - Additional data returned by the operation (optional)