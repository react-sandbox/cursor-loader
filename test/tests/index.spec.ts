import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('CursorLoader', () => {
  test('renders on cursor', async ({ page }) => {
    await page.mouse.move(200, 200, { steps: 100 })
    await expect(page.locator('[data-sandbox-cursor-loader]')).toHaveCSS(
      'top',
      '200px'
    )
    await expect(page.locator('[data-sandbox-cursor-loader]')).toHaveCSS(
      'left',
      '200px'
    )
  })

  test('renders with size attribute', async ({ page }) => {
    await expect(page.locator('[data-sandbox-cursor-loader]')).toHaveAttribute(
      'data-size',
      'md'
    )
    await expect(page.locator('[data-sandbox-cursor-loader]')).toHaveCSS(
      'height',
      '45px'
    )
    await expect(page.locator('[data-sandbox-cursor-loader]')).toHaveCSS(
      'width',
      '45px'
    )
  })

  test('renders load into degrees', async ({ page }) => {
    await expect(page.locator('[data-sandbox-cursor-loader]')).toHaveCSS(
      '--degrees',
      '90deg'
    )
  })

  test('renders with color', async ({ page }) => {
    await expect(page.locator('[data-sandbox-cursor-loader]')).toHaveCSS(
      '--color',
      '#01D45B'
    )
  })

  test('renders with trail delay', async ({ page }) => {
    await expect(page.locator('[data-sandbox-cursor-loader]')).toHaveCSS(
      '--delay',
      '300ms'
    )
  })
})
