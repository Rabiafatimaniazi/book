# Quickstart Guide: GitHub Repository Setup and Push

## Prerequisites

1. **GitHub Personal Access Token**: Create a Personal Access Token (PAT) with appropriate permissions:
   - `repo` scope for repository creation and push operations
   - `admin:org` scope if creating organization repositories

2. **Git Installed**: Ensure Git is installed and accessible from the command line

3. **Python Environment**: Python 3.11+ with required dependencies installed

## Setup

1. **Install Dependencies**:
   ```bash
   pip install PyGithub GitPython click requests
   ```

2. **Configure GitHub Token**:
   ```bash
   # Set environment variable
   export GITHUB_TOKEN=your_personal_access_token_here
   ```

   Or create a `.env` file:
   ```
   GITHUB_TOKEN=your_personal_access_token_here
   ```

## Basic Usage

### Create a New Repository

```bash
# Create a simple public repository
python -m backend.src.cli.main create-repo --name my-new-repo --description "My new project"

# Create a private repository with initialization
python -m backend.src.cli.main create-repo --name my-private-repo --private --auto-init

# Create a repository with gitignore and license
python -m backend.src.cli.main create-repo --name my-repo --gitignore Python --license mit
```

### Push Local Changes to GitHub

```bash
# Push current directory to a new GitHub repository
python -m backend.src.cli.main push-to-github --repo-name my-repo --commit-message "Initial commit"

# Push with specific branch
python -m backend.src.cli.main push-to-github --repo-name my-repo --branch main --commit-message "Update files"
```

### Validate GitHub Token

```bash
# Check if your token is valid
python -m backend.src.cli.main validate-token
```

## Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `--name` | Repository name | Required |
| `--description` | Repository description | "" |
| `--private` | Make repository private | false |
| `--auto-init` | Initialize with README | false |
| `--gitignore` | Gitignore template | None |
| `--license` | License template | None |
| `--commit-message` | Commit message for push | "Initial commit" |
| `--branch` | Branch to push to | "main" |

## Example Workflow

1. **Create a new repository**:
   ```bash
   python -m backend.src.cli.main create-repo --name my-project --description "My awesome project" --auto-init --gitignore Python
   ```

2. **Navigate to your local project directory**:
   ```bash
   cd /path/to/your/local/project
   ```

3. **Push your local changes**:
   ```bash
   python -m backend.src.cli.main push-to-github --repo-name my-project --commit-message "Add project files"
   ```

## Troubleshooting

**Issue**: "Authentication failed"
- **Solution**: Verify your GitHub token has the correct permissions and hasn't expired

**Issue**: "Repository already exists"
- **Solution**: Use a different repository name or delete the existing one

**Issue**: "Rate limit exceeded"
- **Solution**: Wait before making additional API calls, or use an account with higher rate limits

## Security Notes

- Never commit your GitHub token to version control
- Use environment variables or secure credential storage
- Revoke tokens that are no longer needed
- Use tokens with minimal required permissions