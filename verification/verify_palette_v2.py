import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Start dev server
        import subprocess
        import time
        process = subprocess.Popen(["pnpm", "run", "dev", "--port", "3001"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        time.sleep(5)

        try:
            await page.goto("http://localhost:3001")

            # 1. Check if MetricCard is a button and has focus ring
            metric_card = page.get_by_role("button", name="Просмотреть детали метрики:").first
            await metric_card.focus()
            await page.screenshot(path="verification/focus_metric.png")

            # 2. Check if View Toggles are buttons and have aria-pressed
            dashboard_btn = page.get_by_role("button", name="Дашборд")
            is_pressed = await dashboard_btn.get_attribute("aria-pressed")
            print(f"Dashboard aria-pressed: {is_pressed}")

            # 3. Check Settings button ARIA
            settings_btn = page.get_by_role("button", name="Настройки")
            print(f"Settings ARIA: {await settings_btn.get_attribute('aria-label')}")

            # 4. Open detail and check close button
            await metric_card.click()
            await asyncio.sleep(1)
            close_btn = page.get_by_role("button", name="Закрыть панель")
            await close_btn.focus()
            await page.screenshot(path="verification/focus_close.png")

        finally:
            process.terminate()
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
