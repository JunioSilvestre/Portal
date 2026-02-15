/**
 * @file verify-all.mjs
 * @description Orchestration script to run all project verifications (Lint, Types, Tests, Build).
 * @author Senior Engineer Logic
 */

import { spawn } from 'child_process';
import chalk from 'chalk'; // Assuming chalk is available or we use basic colors, let's use basic ANSI for zero-deps.

const steps = [
    { name: 'Linting', command: 'npm', args: ['run', 'lint'] },
    // { name: 'Type Checking', command: 'npx', args: ['tsc', '--noEmit'] }, // Optional, next build does this
    { name: 'Unit Tests', command: 'npm', args: ['test'] },
    { name: 'Production Build', command: 'npm', args: ['run', 'build'] },
];

const runStep = (step) => {
    return new Promise((resolve, reject) => {
        console.log(`\n🔵 Starting: ${step.name}...`);

        // Windows requires shell: true for npm/npx
        const process = spawn(step.command, step.args, { stdio: 'inherit', shell: true });

        process.on('close', (code) => {
            if (code === 0) {
                console.log(`✅ ${step.name} Passed!`);
                resolve();
            } else {
                console.error(`❌ ${step.name} Failed with code ${code}`);
                reject(new Error(`${step.name} failed`));
            }
        });

        process.on('error', (err) => {
            console.error(`❌ ${step.name} Error: ${err.message}`);
            reject(err);
        });
    });
};

const runAll = async () => {
    console.log('🚀 Starting Comprehensive System Verification');
    const startTime = Date.now();

    for (const step of steps) {
        try {
            await runStep(step);
        } catch (error) {
            console.error('\n💥 Verification Failed! Please fix the errors above.');
            process.exit(1);
        }
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n✨ All Systems Go! Verification completed in ${duration}s.`);
};

runAll();
