import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Hero from '../src/components/Hero.astro';
import Button from '../src/components/ui/Button.astro';

test('Hero component renders heading', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Hero);

    expect(result).toContain('Salesforce Solutions Strategist');
});

test('Button component renders with correct class', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Button, {
        props: { variant: 'primary' },
        slots: { default: 'Click me' }
    });

    expect(result).toContain('bg-primary');
    expect(result).toContain('Click me');
});
