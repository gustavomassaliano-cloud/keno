import { execSync } from 'child_process';
import path from 'path';

console.log("Starting native zip alternative...");
try {
  execSync('cd /app/applet && tar -czf site-pronto-godaddy.tar.gz -C dist .');
  console.log("Successfully created tar.gz instead of zip.");
} catch (e) {
  console.error("Failed", e);
}
