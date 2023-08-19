import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.locator('.load-25').click()
})

test.describe('CursorLoader', () => {
  test('updates position relative to mouse', async ({ page }) => {
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

  test('does not update position when load is 0', async ({ page }) => {
    await page.locator('.load-0').click()
    await page.mouse.move(200, 200, { steps: 100 })

    await expect(page.locator('[data-sandbox-cursor-loader]')).toHaveCSS(
      '--degrees',
      '0deg'
    )
    await expect(page.locator('[data-sandbox-cursor-loader]')).not.toHaveCSS(
      'top',
      '200px'
    )
    await expect(page.locator('[data-sandbox-cursor-loader]')).not.toHaveCSS(
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

  test('callback gets called on completion', async ({ page }) => {
    await expect(page.locator('.load-100')).toHaveText('Set Load 100')
    await page.locator('.load-100').click()
    await expect(page.locator('.load-100')).toHaveText('Completed!')
  })
})
