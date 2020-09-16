import discord
import asyncio
import os
from discord.ext import commands
from discord.ext.commands import bot

client = commands.Bot(command_prefix = '!', case_insensitive=True)
Client = discord.client

@client.event
async def on_ready():
    await client.change_presence(activity=discord.Game(name='ch!help'))
    print("ready")



@client.event
async def on_message(message):
    if message.content.startswith("ch!크힛 맥크리"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 맥크리값```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/680260392697724943/742365462847029248/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 위도우"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 위도우값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/680260392697724943/742366145100644352/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 애쉬"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 애쉬값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/680260392697724943/742366427675230309/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 겐지"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 겐지값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/680260392697724943/742366610936823818/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 둠피"):
        embed = discord.Embed(title="Setting", description="**```fix\n앱큐님의 크힛 스무스 둠피값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/680260392697724943/721231852039569448/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 한조") :
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 한조값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/680260392697724943/742369648493985902/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 트레이서"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 트레이서값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/680260392697724943/742368716490145823/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 자리야"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 자리야값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/686401479040303150/743293031486062722/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 아나"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 아나값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/686401479040303150/743296522787094538/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 브리기테"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 브리기테값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745822809934004314/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 디바"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 디바값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745822981854462007/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 바티"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 바티값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745823246259060787/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 루시우"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 루시우값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745823311128297552/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 젠야타"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 젠야타값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745823407073001562/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 에코"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 에코값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745823795784188064/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 메르시"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 메르시값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745823840726417498/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 모이라"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 모이라값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745823840726417498/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 레킹볼"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 레킹볼값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745823916567691305/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 바스"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 바스티온값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745825054855528451/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 정크"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 정크렛값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745825054855528451/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 메이"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 메이값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745825343855656970/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 파라"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 파라값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745825449703112774/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 솔저"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 솔저값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745825660861415484/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 솜브라"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 솜브라값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745825791354339418/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 시메"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 시메트라값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745825939694419998/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)
    if message.content.startswith("ch!크힛 토르"):
        embed = discord.Embed(title="Setting", description="**```fix\n아리님의 크힛 스무스 토르비욘값\n```**", color=0xff0000)
        embed.set_image(url="https://cdn.discordapp.com/attachments/681471048688074827/745825939694419998/unknown.png")
        embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/680260392697724943/742393147719417866/loading.gif")
        await message.channel.send(embed=embed)



client.run(access_token)
