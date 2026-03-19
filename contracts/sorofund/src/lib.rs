#![no_std]

use soroban_sdk::{contract, contractimpl, contracttype, Env, Address, String};

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Campaign {
    pub creator: Address,
    pub title: String,
    pub goal_amount: i128,
    pub current_amount: i128,
    pub deadline: u64,
    pub active: bool,
    pub milestones: u32,
    pub current_milestone: u32,
}

#[contract]
pub struct SoroFundContract;

#[contractimpl]
impl SoroFundContract {
    pub fn create_campaign(
        env: Env,
        creator: Address,
        title: String,
        goal_amount: i128,
        deadline: u64,
        milestones: u32,
    ) -> u32 {
        creator.require_auth();
        // Simplified Logic: generate deterministic ID or use simple counter
        let mut id: u32 = env.storage().instance().get(&"CAMPAIGN_COUNT").unwrap_or(0);
        id += 1;
        env.storage().instance().set(&"CAMPAIGN_COUNT", &id);

        let campaign = Campaign {
            creator,
            title,
            goal_amount,
            current_amount: 0,
            deadline,
            active: true,
            milestones,
            current_milestone: 0,
        };

        env.storage().persistent().set(&id, &campaign);
        id
    }

    pub fn pledge(env: Env, campaign_id: u32, backer: Address, amount: i128) {
        backer.require_auth();
        let mut campaign: Campaign = env.storage().persistent().get(&campaign_id).unwrap();
        
        // In a full implementation, we would transfer USDC/XLM using TokenInterface here.
        campaign.current_amount += amount;
        
        env.storage().persistent().set(&campaign_id, &campaign);
    }

    pub fn get_campaign(env: Env, campaign_id: u32) -> Campaign {
        env.storage().persistent().get(&campaign_id).unwrap()
    }
}
