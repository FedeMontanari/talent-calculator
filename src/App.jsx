import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const talentCollection = document.getElementsByClassName("talent");
    const tooltip = document.getElementById("tooltip");
    Array.from(talentCollection).forEach((n) => {
      if (n.innerHTML !== "") {
        n.addEventListener("mousemove", (e) => {
          n.appendChild(tooltip);
          tooltip.style.display = "grid";
          const x = e.clientX;
          const y = e.clientY;
          tooltip.style.top = y + 20 + "px";
          tooltip.style.left = x + 20 + "px";
        });
        n.addEventListener("mouseleave", (e) => {
          tooltip.style.display = "none";
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="treeContainer">
        <div className="tooltip" id="tooltip" style={{ display: "none" }}>
          <h4 className="tooltipTitle">Spell/Skill title</h4>
          <span className="tooltipRank">Rank X/X</span>
          <span className="tooltipError">
            Error {"X talent points required."}
          </span>
          <span className="tooltipCost">Resource cost</span>
          <span className="tooltipCasttime">Cast time</span>
          <span className="tooltipCooldown">Cooldown</span>
          <p className="tooltipDescription">
            Tooltip Description for the spell/skill or passive{" "}
          </p>
        </div>
        <div className="tree">
          <div className="treeHeader">
            <b>Arms</b>
            <img
              src="https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_eviscerate.jpg"
              alt="Spec Icon"
              className="treeHeaderIcon"
            />
            <span className="treeHeaderPoints">0 / 71</span>
          </div>
          <div
            className="treeBackground"
            style={{
              backgroundImage:
                "url(https://wow.zamimg.com/images/wow/talents/backgrounds/wrath/161.jpg)",
            }}
          ></div>
          <div className="treeTalents">
            <div className="talentRow">
              <div className="talent">
                <img
                  className="icon"
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_rogue_ambush.jpg"
                  alt="Improved Heroic Strike"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  className="icon"
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_parry.jpg"
                  alt="Deflection"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_gouge.jpg"
                  alt="Improved Rend"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="arrow first">
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_charge.jpg"
                  alt="Improved Charge"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_magic_magearmor.jpg"
                  alt="Iron Will"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_nature_enchantarmor.jpg"
                  alt="Tactical Mastery"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_lifedrain.jpg"
                  alt=""
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/inv_sword_05.jpg"
                  alt="Improved Overpower"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_blessingofstamina.jpg"
                  alt="Anger Management"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_searingarrow.jpg"
                  alt="Impale"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="arrow second">
                <div></div>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_backstab.jpg"
                  alt="Deep Wounds"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/inv_axe_09.jpg"
                  alt="Two-Handed Weapon Specialization"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_rogue_hungerforblood.jpg"
                  alt="Taste for Blood"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/inv_axe_06.jpg"
                  alt="Poleaxe Specialization"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_rogue_slicedice.jpg"
                  alt="Sweeping Strikes"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="arrow third">
                <div></div>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/inv_mace_01.jpg"
                  alt="Mace Specialization"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/inv_sword_27.jpg"
                  alt="Sword Specialization"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_weaponmastery.jpg"
                  alt="Weapon Mastery"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_shockwave.jpg"
                  alt="Improved Hamstring"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_bloodnova.jpg"
                  alt="Trauma"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_hunter_harass.jpg"
                  alt="Second Wind"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_savageblow.jpg"
                  alt="Mortal Strike"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="arrow fourth">
                <div></div>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_offensivestance.jpg"
                  alt="Strength of Arms"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_decisivestrike.jpg"
                  alt="Improved Slam"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_bullrush.jpg"
                  alt="Juggernaut"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_savageblow.jpg"
                  alt="Improved Mortal Strike"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_unrelentingassault.jpg"
                  alt="Unrelenting Assault"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="arrow fifth">
                <div></div>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_punishingblow.jpg"
                  alt=""
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_improveddisciplines.jpg"
                  alt="Sudden Death"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_endlessrage.jpg"
                  alt="Endless Rage"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_bloodfrenzy.jpg"
                  alt="Blood Frenzy"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_trauma.jpg"
                  alt="Wrecking Crew"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="talent"></div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_bladestorm.jpg"
                  alt="Bladestorm"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="talent"></div>
              <div className="talent"></div>
            </div>
          </div>
        </div>
        <div className="tree">
          <div
            className="treeBackground"
            style={{
              backgroundImage:
                "url(https://wow.zamimg.com/images/wow/talents/backgrounds/wrath/164.jpg)",
            }}
          ></div>
          <div className="treeHeader">
            <b>Fury</b>
            <img
              src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_innerrage.jpg"
              alt="Spec Icon"
              className="treeHeaderIcon"
            />
            <span className="treeHeaderPoints">0 / 71</span>
          </div>
          <div className="treeTalents">
            <div className="talentRow">
              <div className="talent">
                <img
                  className="icon"
                  src="https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_22.jpg"
                  alt="Armored to the Teeth"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  className="icon"
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_nature_purge.jpg"
                  alt="Booming Voice"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_rogue_eviscerate.jpg"
                  alt="Cruelty"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_warcry.jpg"
                  alt="Improved Demoralizing Shout"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_nature_stoneclawtotem.jpg"
                  alt="Unbridled Wrath"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_cleave.jpg"
                  alt="Improved Cleave"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathscream.jpg"
                  alt="Piercing Howl"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_summonimp.jpg"
                  alt="Blood Craze"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_nature_focusedmind.jpg"
                  alt="Commanding Pressence"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_dualwield.jpg"
                  alt="Dual Wield Specialization"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/inv_sword_48.jpg"
                  alt="Improved Execute"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_unholyfrenzy.jpg"
                  alt="Enrage"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="arrow sixth">
                <div></div>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_hunter_swiftstrike.jpg"
                  alt=""
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_marksmanship.jpg"
                  alt="Precision"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathpact.jpg"
                  alt="Death Wish"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="arrow seventh">
                <div></div>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_rogue_sprint.jpg"
                  alt="Improved Intercept"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_nature_ancestralguardian.jpg"
                  alt="Improved Berserker Rage"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_ghoulfrenzy.jpg"
                  alt="Flurry"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="arrow eigth">
                <div></div>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_misc_emotionangry.jpg"
                  alt=""
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_endlessrage.jpg"
                  alt="Intensify Rage"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_nature_bloodlust.jpg"
                  alt="Bloodthirst"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="arrow nineth">
                <div></div>
                <div></div>
              </div>
              <div className="arrow tenth">
                <div></div>
              </div>
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_whirlwind.jpg"
                  alt="Improved Whirlwind"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_furiousresolve.jpg"
                  alt="Furious Attacks"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent"></div>
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_racial_avatar.jpg"
                  alt="Improved Berserker Rage"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_heroicleap.jpg"
                  alt="Heroic Fury"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_rampage.jpg"
                  alt="Rampage"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_bloodsurge.jpg"
                  alt="Bloodsurge"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_intensifyrage.jpg"
                  alt="Unending Fury"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="talent"></div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_titansgrip.jpg"
                  alt="Titans' Grip"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="talent"></div>
              <div className="talent"></div>
            </div>
          </div>
        </div>
        <div className="tree">
          <div className="treeHeader">
            <b>Protection</b>
            <img
              src="https://wow.zamimg.com/images/wow/icons/medium/inv_shield_06.jpg"
              alt="Spec Icon"
              className="treeHeaderIcon"
            />
            <span className="treeHeaderPoints">0 / 71</span>
          </div>
          <div
            className="treeBackground"
            style={{
              backgroundImage:
                "url(https://wow.zamimg.com/images/wow/talents/backgrounds/wrath/163.jpg)",
            }}
          ></div>
          <div className="treeTalents">
            <div className="talentRow">
              <div className="talent">
                <img
                  className="icon"
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_racial_bloodrage.jpg"
                  alt="Improved Bloodrage"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  className="icon"
                  src="https://wow.zamimg.com/images/wow/icons/medium/inv_shield_06.jpg"
                  alt="Shield Specialization"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_thunderclap.jpg"
                  alt="Improved Thunder Clap"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_incite.jpg"
                  alt="Incite"
                  className="icon"
                ></img>
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/spell_nature_mirrorimage.jpg"
                  alt="Anticipation"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="arrow eleventh">
                <div></div>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_nature_shamanrage.jpg"
                  alt=""
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_ashestoashes.jpg"
                  alt="Last Stand"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_revenge.jpg"
                  alt="Improved Revenge"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_shieldmastery.jpg"
                  alt="Shield Mastery"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_devotion.jpg"
                  alt="Thoughness"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_shieldreflection.jpg"
                  alt="Improved Shield Reflection"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_disarm.jpg"
                  alt="Improved Disarm"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_sunder.jpg"
                  alt="Puncture"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_shieldwall.jpg"
                  alt="Improved Disciplines"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_thunderbolt.jpg"
                  alt="Concussion Blow"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="arrow twelveth">
                <div></div>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_shieldbash.jpg"
                  alt="Gag Order"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent"></div>
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/inv_sword_20.jpg"
                  alt="One Handed Weapon Specialization"
                  className="icon"
                />
                <span className="rank">0/5</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_defensivestance.jpg"
                  alt="Improved Defensive Stance"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_vigilance.jpg"
                  alt="Vigilance"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_focusedrage.jpg"
                  alt="Focused Rage"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/inv_helmet_21.jpg"
                  alt="Vitality"
                  className="icon"
                />
                <span className="rank"></span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_safeguard.jpg"
                  alt="Safeguard"
                  className="icon"
                />
                <span className="rank">0/2</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_warbringer.jpg"
                  alt="Warbringer"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/inv_sword_11.jpg"
                  alt="Devastate"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="arrow thirteenth">
                <div></div>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_criticalblock.jpg"
                  alt="Critical Block"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent">
                <img src="https://wow.zamimg.com/images/wow/icons/large/ability_bullrush.jpg" alt="" className="icon" />
                <span className="rank">0/1</span>
              </div>
              <div className="arrow fourteenth">
                <div></div>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_swordandboard.jpg"
                  alt="Sword and Board"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/inv_shield_31.jpg"
                  alt="Damage Shield"
                  className="icon"
                />
                <span className="rank">0/3</span>
              </div>
              <div className="talent"></div>
            </div>

            <div className="talentRow">
              <div className="talent"></div>
              <div className="talent">
                <img
                  src="https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_shockwave.jpg"
                  alt="Shockwave"
                  className="icon"
                />
                <span className="rank">0/1</span>
              </div>
              <div className="talent"></div>
              <div className="talent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
