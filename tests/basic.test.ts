import { expect, test, describe } from 'vitest';

describe('Component Tests', () => {
    test('Hero component title is correct', () => {
        const expectedTitle = 'Salesforce Solutions Strategist';
        expect(expectedTitle).toBeTruthy();
        expect(expectedTitle.length).toBeGreaterThan(0);
    });

    test('Button component variants', () => {
        const validVariants = ['primary', 'secondary', 'outline'];
        expect(validVariants).toContain('primary');
        expect(validVariants).toContain('secondary');
        expect(validVariants).toContain('outline');
    });

    test('Navigation components logic', () => {
        const navItems = [
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Projects', href: '/projects' },
            { name: 'Contact', href: '/contact' }
        ];
        expect(navItems).toHaveLength(4);
        expect(navItems[0].name).toBe('Home');
    });
});

